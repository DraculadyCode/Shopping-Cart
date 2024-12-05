import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/foodItems.json";

function FoodPage() {
  return (
    <div>
      <h1 className="text-center text-white bg-primary mb-4 py-3 rounded">
        Food Products
      </h1>
      {/* Add content related to electronics here */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FoodPage;
