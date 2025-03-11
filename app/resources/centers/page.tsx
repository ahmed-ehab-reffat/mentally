export default function CentersPage() {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Mental Health Centers and Hospitals
      </h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => (
          <li key={center.name}>
            <h3>{center.name}</h3>
            <div className="mb-4">
              <p>{center.address}</p>
              <p>Phone: {center.phone}</p>
              <p>Email: {center.email}</p>
            </div>
            <button type="button">
              <a href={center.mapsUrl} className="inline-flex items-center">
                View on Map
              </a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const centers: {
  name: string;
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
}[] = [
  {
    name: "Abbassia Mental Health Hospital",
    address:
      "1 Salah Salem Street, Next to the Exhibition Grounds, Nasr City, Cairo",
    phone: "022616255",
    email: "abbasssya@gmail.com",
    mapsUrl: "https://goo.gl/maps/AbbassiaMentalHealthHospital",
  },
  {
    name: "Helwan Mental Health Hospital",
    address:
      "Mansour Street Extension, between the two villages, Helwan, Cairo",
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
];
