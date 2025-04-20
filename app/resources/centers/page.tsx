import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { ArrowRight, Hospital } from "@/components/ui/icons";

export default function CentersPage() {
  return (
    <div className="container mx-auto px-8 pt-12 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <Hospital className="w-10 h-10 fill-primary" />
        <h1 className="text-4xl font-bold text-primary">
          Mental Health Centers and Hospitals
        </h1>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => (
          <Card
            key={center.name}
            className="h-full flex flex-col justify-between"
          >
            <h3 className="text-2xl text-center text-primary font-bold tracking-tighter mb-4">
              {center.name}
            </h3>
            <div className="mb-4 space-y-1">
              <p>{center.type}</p>
              <p>{center.address}</p>
              <p>Phone: {center.phone}</p>
            </div>
            <a href={center.mapsUrl}>
              <Button className="flex items-center justify-center gap-2  w-3/4 mx-auto">
                View on Map
                <ArrowRight className="w-3 h-3 fill-secondry" />
              </Button>
            </a>
          </Card>
        ))}
      </ul>
    </div>
  );
}

const centers: {
  name: string;
  type: "Puplic" | "Private";
  address: string;
  phone: string;
  mapsUrl: string;
}[] = [
  {
    name: "Abbassia Mental Health Hospital",
    type: "Puplic",
    address:
      "1 Salah Salem Street, Next to the Exhibition Grounds, Nasr City, Cairo",
    phone: "022616255",
    mapsUrl: "https://maps.app.goo.gl/7Uhb9LUojy461WoK7",
  },
  {
    name: "Helwan Mental Health Hospital",
    type: "Puplic",
    address:
      "Mansour Street Extension, between the two villages, Helwan, Cairo",
    phone: "0222547368 / 0227137387",
    mapsUrl: "https://maps.app.goo.gl/jKiyvvLY6P1noaQS9",
  },
  {
    name: "Al-Khanka Central Hospital",
    type: "Puplic",
    address: "Al mostashfa St., Madinet El Khanka, AlQualioubeya",
    phone: "44698816 / 44698437 / 44698845",
    mapsUrl: "https://maps.app.goo.gl/9RsH7mEd9Sp539Eh6",
  },
  {
    name: "Heliopolis Psychiatric Hospital (Al-Matar)",
    type: "Puplic",
    address: "Sheraton Al Matar, El Nozha, Cairo",
    phone: "01100232349 / 0222902581 / 16023",
    mapsUrl: "https://maps.app.goo.gl/dcSrpFFjbXJEnohDA",
  },
  {
    name: "Al Mashfa",
    type: "Private",
    address: "43, Cairo-Ismailia Road In front of (IMC), Cairo",
    phone: "01006422220 / 01000083561 / 20554400924",
    mapsUrl: "https://maps.app.goo.gl/MQuGGWewMKXUMjPr6",
  },
  {
    name: "Dr Adel Sadek Hospital",
    type: "Private",
    address: "(5) Ahmed Abd ElNabi St., Nozha ElGadida, Cairo",
    phone: "01000042768 / 01001908904 / 02226205757",
    mapsUrl: "https://maps.app.goo.gl/tcdWs8YZfXwjzXqz6",
  },
  {
    name: "Psychiatric Health Resort (Okasha hospital)",
    type: "Private",
    address:
      "Prof. Ahmed Okasha St., Off Mehwar Anwar El Sadaat, El Banafsig 12 District, Behind Police Academy, First Settlement, New Cairo",
    phone: "01002406998 / 0223082300",
    mapsUrl: "https://maps.app.goo.gl/fo4jXLqT8jU7Bs4m8",
  },
  {
    name: "The Behman Hospital",
    type: "Private",
    address: "32 El-Marsad St., Helwan 11421, Cairo",
    phone: "16984",
    mapsUrl: "https://maps.app.goo.gl/vZfKS8JS1ZF5GDd87",
  },
];
