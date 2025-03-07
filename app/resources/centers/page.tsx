"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const centers = [
  {
    name: "Abbassia Mental Health Hospital",
    address: "1 Salah Salem Street, Next to the Exhibition Grounds, Nasr City, Cairo",
    phone: "022616255",
    email: "abbasssya@gmail.com",
    mapsUrl: "https://goo.gl/maps/AbbassiaMentalHealthHospital",
  },
  {
    name: "Helwan Mental Health Hospital",
    address: "Mansour Street Extension, between the two villages, Helwan, Cairo",
    phone: "0225547368 / 0227137387",
    email: "hhelwan@gmail.com",
    mapsUrl: "https://goo.gl/maps/HelwanMentalHealthHospital",
  },
  {
    name: "Banha Mental Health Hospital",
    address:
      "Faculty of Science Street, behind Banha Chest Hospital, next to the Health Directorate Training Center, Banha, Qalyubia",
    phone: "0133232506",
    email: "manhaaa20@gmail.com",
    mapsUrl: "https://goo.gl/maps/BanhaMentalHealthHospital",
  },
  // Add more centers here...
]

export default function CentersPage() {
  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-3xl font-bold mb-6">Mental Health Centers and Hospitals</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {centers.map((center) => (
          <Card key={center.name}>
            <CardHeader>
              <CardTitle>{center.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                <p>{center.address}</p>
                <p>Phone: {center.phone}</p>
                <p>Email: {center.email}</p>
              </CardDescription>
              <Button asChild>
                <a href={center.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  View on Map <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

