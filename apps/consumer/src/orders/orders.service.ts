import { Injectable } from '@nestjs/common';

import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  create(orderDto: OrderDto) {
    console.log(orderDto);
    return orderDto;
  }
}
