import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { OrderDto } from './dto/order.dto';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @EventPattern('create')
  create(@Payload() orderDto: OrderDto) {
    return this.ordersService.create(orderDto);
  }
}
