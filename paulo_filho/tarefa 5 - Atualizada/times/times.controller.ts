import { Body, Controller, Get, Post, Param, Put, Delete, ParseIntPipe, UsePipes } from '@nestjs/common';
import { CreateTimeDto } from './dto/create-time-dto';
import { UpdatePutTimeDto } from './dto/update-time-dto';
import { TimesService } from './times.service';
import { CapitalizeTimeNamePipe } from './pipe/time-name.pipe';


@Controller('times')
export class TimesController {
  constructor(private readonly timeService: TimesService) {}

  @Post()
  @UsePipes(CapitalizeTimeNamePipe) // Aplica o Pipe a TODO o body
  async create(@Body() createTimeDto: CreateTimeDto) {
    const novoTime = await this.timeService.create(createTimeDto);
    return {
      message: 'Time criado com sucesso',
      data: novoTime,
    };
  }

  @Get()
  findAll() {
    return this.timeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.timeService.findOne(id);
  }

  @Put(':id')
  @UsePipes(CapitalizeTimeNamePipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTimeDto: UpdatePutTimeDto
  ) {
    const timeAtualizado = await this.timeService.update(id, updateTimeDto);
    return {
      message: `Time com ID ${id} atualizado com sucesso`,
      data: timeAtualizado,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.timeService.remove(id);
  }
}