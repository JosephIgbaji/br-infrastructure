import OfficeForm from "@/components/OfficeForm";
import ServerForm from "@/components/ServerForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VirtualMachineForm from "@/components/VirtualMachineForm";

const page = () => {
  return (
    <section className="pl-36 lg:pl-20 pr-20 h-screen flex w-full justify-center ">
      <Tabs defaultValue="office" className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-center">
          <TabsList className="min-w-[300px] mt-4">
            <TabsTrigger value="office">Office</TabsTrigger>
            <TabsTrigger value="servers">Servers</TabsTrigger>
            <TabsTrigger value="vms">Virtual Machines</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="office">
          <div>List of all office gadgets</div>
          <OfficeForm />
        </TabsContent>
        <TabsContent value="servers">
          <div>List of All servers</div>
          <ServerForm />
        </TabsContent>
        <TabsContent value="vms">
          <div>List of all Active virtual machines.</div>
          <VirtualMachineForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
