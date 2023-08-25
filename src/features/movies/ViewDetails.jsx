import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import MovieDetail from "./MovieDetail";
// import MovieSummaryModal from "./MovieSummaryModal";

export default function ViewDetails() {
  return (
    <Modal>
      <Modal.Open opens='details'>
        <Button>View movie details</Button>
      </Modal.Open>
      <Modal.Window name='details'>
        {/* <MovieSummaryModal /> */}
        <MovieDetail />
      </Modal.Window>
    </Modal>
  )
}
