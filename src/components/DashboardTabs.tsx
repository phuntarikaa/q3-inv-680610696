import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

type Option = { value: string; label: string };
export function DashboardTabs() {
  
  
  return (
    <div className="w-full">
      <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By category</TabsTrigger>
      </TabsList>
      
    </div>
  );
}
