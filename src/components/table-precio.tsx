import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const invoices = [
  {
    invoice: "Superseat",
    paymentStatus: "$5000",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "Normal",
    paymentStatus: "$4500",
    paymentMethod: "PayPal",
  },
  {
    invoice: "Tarjeta naranja 2x1",
    paymentStatus: "$4500",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "+Showcase 2X1 2D	",
    paymentStatus: "$4500",
    paymentMethod: "Credit Card",
  },

];

export function TablePrecio() {
  return (
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Entrada</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Cantidad</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{SelectDemo()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
import * as React from "react";

function SelectDemo() {
  const array = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="0" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
