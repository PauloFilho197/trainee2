import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CapitalizeTimeNamePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Verifica se é o body da requisição (tipo 'body')
    if (metadata.type === 'body' && value?.name) {
      return {
        ...value,
        name: this.capitalizeName(value.name)
      };
    }
    return value;
  }

  private capitalizeName(name: string): string {
    if (!name) return name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
















/*
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CapitalizeTimeNamePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'string') return value;
    if (value.length === 0) return value;

    // Capitaliza a primeira letra e mantém o resto minúsculo
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
  */