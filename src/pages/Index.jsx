import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudLightning } from "lucide-react";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to StormWatch</h1>
        <p className="text-lg mb-6">Your ultimate source for lightning and storm information.</p>
        <Button variant="primary" size="lg">Learn More</Button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CloudLightning className="h-8 w-8 text-blue-500" />
            <CardTitle>Real-time Lightning Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stay updated with real-time lightning strikes around the world.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CloudLightning className="h-8 w-8 text-blue-500" />
            <CardTitle>Storm Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get notified about upcoming storms and severe weather conditions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CloudLightning className="h-8 w-8 text-blue-500" />
            <CardTitle>Safety Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn how to stay safe during lightning storms and severe weather.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default Index;