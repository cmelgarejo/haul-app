import { useState, useEffect, useCallback } from "react";
import { Inspection } from "@server/inspections/entities/inspection.entity";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import { FormControl, FormGroup, Input, Stack, TablePagination, Typography } from "@mui/material";
import { State } from "@table-library/react-table-library/types/common";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import Status from "../Status";
import "./index.css";

type HaulGridProps = Record<string, never>;

const columns = [
  {
    label: "Date",
    renderCell: (item: Inspection) =>
      item.inspection_date.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      }),
    sort: { sortKey: "inspection_date" },
    resize: false,
  },
  {
    label: "Status",
    renderCell: (item: Inspection) => {
      if (item.violations.violation.BASIC) return <Status text="Unresolved" color="error" />;
      return <Status text="No Violation" color="success" />;
    },
    sort: { sortKey: "violations.violation.BASIC" },
    resize: false,
  },
  {
    label: "Inspection Number",
    renderCell: (item: Inspection) => item.report_number,
    sort: { sortKey: "report_number" },
    resize: false,
  },
  {
    label: "BASIC",
    renderCell: (item: Inspection) => item.violations.violation.BASIC,
    sort: { sortKey: "violations.violation.BASIC" },
    resize: false,
  },
  {
    label: "Vehicle Plate",
    renderCell: (item: Inspection) =>
      item.vehicles.vehicle[0]?.license_number ?? item.vehicles.vehicle[1]?.license_number,
    resize: false,
  },
];

export default function HaulGrid({}: HaulGridProps) {
  const theme = useTheme(getTheme());
  const [paginationState, setPaginationState] = useState<State>({ page: 0, size: 10 });
  const [filter, setFilter] = useState<string>(); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [sortBy, setSortBy] = useState<string>("inspection_date");
  const [sortDir, setSortDir] = useState<string>("DESC");
  const [inspections, setInspections] = useState<Inspection[]>();
  const [totalRecordCount, setTotalRecordCount] = useState<number>(0);
  const data = !!inspections
    ? { nodes: inspections, totalPages: totalRecordCount }
    : { nodes: [], totalPages: totalRecordCount };
  const handlePaginationChange = (action: any, state: any) => setPaginationState(state);
  const handleSortChange = (action: any, state: any) => {
    setSortBy(state.sortKey);
    setSortDir(state.reverse ? "DESC" : "ASC");
  };
  const handleFilter = (event: any) => {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setFilter(undefined);
      return;
    }
    if (searchValue.length < 3) return; // at least 3 characters!
    const filter = { "violations.violation.BASIC": event.target.value };
    setFilter(JSON.stringify(filter));
  };
  const fetchInspections = useCallback(async () => {
    const qsBuilder = {
      page: paginationState.page.toString(),
      limit: paginationState.size.toString(),
    } as Record<string, string>;
    if (filter) qsBuilder["filter"] = filter;
    if (sortBy) qsBuilder["sortBy"] = sortBy;
    if (sortDir) qsBuilder["sortDir"] = sortDir;
    const qs = new URLSearchParams(qsBuilder).toString();
    const response = await fetch(`/api/inspections${qs ? `?${qs}` : ""}`);
    const [list, count] = await response.json();
    setInspections(list);
    setTotalRecordCount(count);
  }, [paginationState, filter, sortBy, sortDir]);
  useEffect(() => {
    fetchInspections();
    return () => {};
  }, [fetchInspections]);
  const pagination = usePagination(
    data,
    {
      state: {
        page: paginationState.page,
        size: paginationState.size,
      },
      onChange: handlePaginationChange,
    },
    {
      isServer: true,
    },
  );
  const sort = useSort(
    data,
    {
      state: {
        sortKey: "inspection_date",
        reverse: true,
      },
      onChange: handleSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaArrowUp />,
        iconDown: <FaArrowDown />,
      },
      sortFns: {},
    },
  );
  return (
    <div className="flex flex-col w-screen h-screen">
      <Typography variant="h4">DOT Inspections</Typography>
      <Stack spacing={10} className="h-10">
        <FormGroup>
          <FormControl>
            <Input placeholder="Search BASIC" onChange={handleFilter} />
          </FormControl>
        </FormGroup>
      </Stack>
      <div className="flex-grow p-4">
        {data.nodes.length ? (
          <CompactTable
            columns={columns}
            data={data}
            theme={theme}
            pagination={pagination}
            sort={sort}
            layout={{ fixedHeader: true }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-2xl">No data found</p>
          </div>
        )}
      </div>
      <Stack spacing={10} className="h-15">
        <TablePagination
          count={totalRecordCount}
          page={paginationState.page}
          rowsPerPage={paginationState.size}
          rowsPerPageOptions={[10, 20, 50, 100]}
          onRowsPerPageChange={(event) => pagination.fns.onSetSize(parseInt(event.target.value, 10))}
          onPageChange={(event, page) => pagination.fns.onSetPage(page)}
          virtualizedOptions={{ rowHeight: 32 }}
        />
      </Stack>
    </div>
  );
}
