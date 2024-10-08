import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OfficeForm from '../../components/OfficeForm';

const page = () => {

  return (
    <section className="h-screen flex items-center justify-center">
      <Tabs defaultValue="office">
        <div className="w-full flex items-center justify-center">
          <TabsList className="min-w-[300px] mt-20">
            <TabsTrigger value="office">Office</TabsTrigger>
            <TabsTrigger value="servers">Servers</TabsTrigger>
            <TabsTrigger value="vms">Virtual Machines</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="office">
          <div>List of all office gadgets</div>
          <OfficeForm />
        </TabsContent>
        <TabsContent value="servers">List of all servers.</TabsContent>
        <TabsContent value="vms">List of All Virtual machines.</TabsContent>
      </Tabs>
      
    </section>
  );
};

export default page;
