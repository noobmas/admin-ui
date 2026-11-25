import MainLayout from "../../components/Layouts/MainLayout";
import Card from "../../components/Elements/Card";

function PageDashboard() {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!";

  return (
    <MainLayout>
      <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 gap-4 p-4 sm:grid-cols-12 sm:grid-rows-[repeat(3,minmax(0,1fr))]">
        <div className="sm:col-span-4">
          <Card title="Total Balance" desc={description} />
        </div>
        <div className="sm:col-span-4">
          <Card title="Goals" desc={description} />
        </div>
        <div className="sm:col-span-4">
          <Card title="Upcoming Bill" link="/bills" desc={description} />
        </div>
        <div className="sm:col-span-4 sm:row-span-2">
          <Card
            title="Recent Transaction"
            link="/transactions"
            desc={description}
          />
        </div>
        <div className="sm:col-span-8">
          <Card title="Statistics" desc={description} />
        </div>
        <div className="sm:col-span-8">
          <Card title="Expenses Breakdown" desc={description} />
        </div>
      </div>
    </MainLayout>
  );
}

export default PageDashboard;
