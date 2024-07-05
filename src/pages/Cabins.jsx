import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/addCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading>All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </> 
  );
}

export default Cabins;
