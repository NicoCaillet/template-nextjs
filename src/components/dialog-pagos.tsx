import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { FormControl } from "./ui/form";

export function DialogPagos() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Pagar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmar transaccion </DialogTitle>
          <DialogDescription>
            Complete los datos de su tarjeta y realice el pago para obtener sus
            tickets
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Input id="name" defaultValue="" className="col-span-3" placeholder="Titular Tarjeta" />
            <Input id="name" defaultValue="" className="col-span-3" placeholder="Numero"/>
          </div>
          <div className="flex items-center gap-4">
            <Input id="username" defaultValue="" className="col-span-3" placeholder="MM"/>
            <Input id="name" defaultValue="" className="col-span-3" placeholder="AA"/>
            <Input id="name" defaultValue="" className="col-span-3" placeholder="XXX"/>
          </div>
          <div className="flex items-center gap-4">
            <Input
              id="name"
              defaultValue=""
              className="col-span-3"
              placeholder="Documento..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirmar pago</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
