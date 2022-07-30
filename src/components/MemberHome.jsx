import Title from "./Title";
import TableBox from "./TableBox";

export default function MemberHome() {
    let h=["#","Make","Model","Year","Cost"]
    let d=[
        [1,"Honda","Accord",2009,"$500"],
        [2,"Toyota","Camry",2012,"$800"],
        [3,"Hyundai","Elantra",2010,"$600"],
        [4,"Honda","Accord",2009,"$500"],
        [5,"Toyota","Camry",2012,"$800"]
    ]
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <Title name="Member Login" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <TableBox name="Table" headers={["", "Model"]} data={[["Honda", "Arnold"], ["Toyota", "Camry"], ["Hyundai", "Elantra"]]} />
                    </div>
                    <div className="col-6">
                    <TableBox name="Table" headers={h} data={d} />

                    </div>

                </div>
            </div></>
    )
}