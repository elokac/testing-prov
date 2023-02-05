import { PrintIcon } from "../../../public/assets/svg/Icons";
// import CardsList from "../../pages/cards-list";
// import Card from "./Card";

const Print = ({ cards, toggleAllCards }) => {
  const allChecked = () => cards.filter(card => card.isChecked).length === cards.length;
  return (
    <div className='bg-white flex justify-end p-4'>
      <div className='flex items-center'>
        <input
          onChange={toggleAllCards}
          type='checkbox'
          id='selectAll'
          checked={allChecked()}
          className='w-5 h-5'
        />
        <label className='mx-4' htmlFor='selectAll'>
          Select all
        </label>

      </div>
      <button className='flex justify-between items-center rounded  gap-5 px-[62px] py-3 bg-bac text-white'>
        <PrintIcon />
        Print all
      </button>
    </div>
  );
}

export default Print
