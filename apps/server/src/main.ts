import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./exception/exception.filter";
import { Logger } from "@nestjs/common";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  // add swagger plugin to app
  const options = new DocumentBuilder()
    .setTitle("Haul Compliance API")
    .setDescription("The inspections API description")
    .setVersion("1.0.8")
    .addTag("inspections")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  if (process.env.NODE_ENV === "development") SwaggerModule.setup("docs", app, document);
  await app.listen(PORT);
  new Logger().log(`Server started on port ${PORT}`);
}
bootstrap();
