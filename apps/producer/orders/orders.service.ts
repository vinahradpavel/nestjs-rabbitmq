import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@Inject('orders') private rabbitClient: ClientProxy) {}
  create(createOrderDto: CreateOrderDto) {
    this.rabbitClient.emit('create', createOrderDto);

    return { message: 'This action adds a new order' };
  }
}
