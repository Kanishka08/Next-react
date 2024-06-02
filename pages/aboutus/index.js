import Link from "next/link";

export default function DevelopersListPage() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <h1>Name of our team</h1>
      {details.map((data) => (
        <div key={data.id}>
          <Link href={`/aboutus/${data.id}`}>Name: {data.name}</Link>
        </div>
      ))}
    </>
  );
}
