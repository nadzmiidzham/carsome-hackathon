import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/response.interceptor';
import { GeneralExceptionFilter } from './common/filters/exception.filter';
import { ValidationException } from './common/exceptions/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: err => new ValidationException(err),
    }),
  );
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new GeneralExceptionFilter());

  await app.listen(Number(process.env.PORT) || 3000);
}
bootstrap();
