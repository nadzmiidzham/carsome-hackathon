import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
  @IsOptional()
  @ApiProperty({ required: false })
  fields?: string = '';

  @IsOptional()
  @ApiProperty({ required: false })
  from?: Date;

  @IsOptional()
  @ApiProperty({ required: false })
  to?: Date;

  @IsOptional()
  @ApiProperty({ required: false })
  orderBy?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  page?: number = 1;

  @IsOptional()
  @ApiProperty({ required: false })
  limit?: number = 30;

  @IsOptional()
  @ApiProperty({ required: false })
  paginationMeta?: boolean;
}
