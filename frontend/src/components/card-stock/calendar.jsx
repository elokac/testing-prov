import DatePicker from 'sassy-datepicker';

export default function CalendarPage() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <div className=''>
          <DatePicker className='calendar my-3  mx-auto ' onChange={onChange} />
    </div>
  );
}
