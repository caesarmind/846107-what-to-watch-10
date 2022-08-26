import {ChangeEvent, useState} from 'react';

function SendReview():JSX.Element{

  const [formData, setFormData] = useState({
    reviewText: '',
    rating: '2',
  });

  function fieldChangeHandler(evt:ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>) {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">

          <input onChange={fieldChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input onChange={fieldChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-5">Rating 4</label>
          <input onChange={fieldChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-5">Rating 3</label>
          <input onChange={fieldChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-5">Rating 2</label>
          <input onChange={fieldChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-5">Rating 1</label>


        </div>
      </div>
      <div className="add-review__text">
        <textarea onChange={fieldChangeHandler} value={formData['reviewText']} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );

}

export default SendReview;
