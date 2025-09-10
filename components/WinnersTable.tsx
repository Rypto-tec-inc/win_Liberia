import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
  {
    number: "0774723794",
    ticket: "w001",
    amount: "400 LRD",
    types: "Quick Pick",
    date: new Date().getMinutes(),
    partner: "kool Fm",
  },
];

export function WinnersTables() {
  return (
    <Table>
      <TableHeader className=" text-xl font-Agdasima text-white">
        <TableRow>
          <TableHead>Number</TableHead>
          <TableHead>Ticket Code</TableHead>
          <TableHead>Types</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Partner</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-lg font-Agdasima">
        {invoices.map(({ number, ticket, amount, types, date, partner }, i) => (
          <TableRow key={i}>
            <TableCell>{number}</TableCell>
            <TableCell>{ticket}</TableCell>
            <TableCell>{types}</TableCell>
            <TableCell>{date} hours ago</TableCell>
            <TableCell>{partner}</TableCell>
            <TableCell>{amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
