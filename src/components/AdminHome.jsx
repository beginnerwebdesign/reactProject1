import Title from "./Title";
import TableBox from "./TableBox";
import { Pie,PieChart,BarChart,Bar,CartesianGrid,XAxis,YAxis } from "recharts";



export default function AdminHome() {
    let h=["#","Make","Model","Year","Cost"]
    let d=[
        [1,"Honda","Accord",2009,"$500"],
        [2,"Toyota","Camry",2012,"$800"],
        [3,"Hyundai","Elantra",2010,"$600"],
        [4,"Honda","Accord",2009,"$500"],
        [5,"Toyota","Camry",2012,"$800"]
    ]
    const info = [
        {name: 'Geeksforgeeks', students: 40},
        {name: 'Technical scripter', students: 30},
        {name: 'Geek-i-knack', students: 50},
        {name: 'Geek-o-mania', students: 20}
      ];
      const info2 = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <Title name="Admin Login" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <TableBox name="Table" headers={["", "Model"]} data={[["Honda", "Arnold"], ["Toyota", "Camry"], ["Hyundai", "Elantra"]]} />
                        
                    </div>
                    <div className="col-6">
                    <TableBox name="Table" headers={h} data={d} />

                    </div>

                </div>
                <div className="row">
                    <div className="col-3 offset-2 p-2">
                    <PieChart width={200} height={200}>
          <Pie data={info} dataKey="students" outerRadius={100} fill="green" />
        </PieChart>
                    </div>
                    <div className="col-3 offset-2 p-2">
                    <BarChart width={300} height={300} data={info2}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
                    </div>
                </div>
            </div></>
    )
}