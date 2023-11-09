/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const AddOn = () => {
  const initialCards = [
    {
      id: 'Card1',
      title: 'Online services',
      description: 'Access to multiplayer games',
      price: '+$10/yr',
      checked: false,
    },
    {
      id: 'Card2',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '$20/yr',
      checked: false,
    },
    {
      id: 'Card3',
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '$20/yr',
      checked: false,
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const handleCardToggle = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, checked: !card.checked };
      }
      return card;
    });
    setCards(updatedCards);
  };
  return (
    <div className={classes.conAddOn}>
      <div className={classes.selectPlan}>
        <FormattedMessage id="pick_add" />
      </div>
      <div className={classes.youHave}>
        <FormattedMessage id="add_help" />
      </div>
      <div className={classes.cardContainer}>
        {cards.map((card) => (
          <div key={card.id} className={classes.card}>
            <label
              htmlFor="cardCheked"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <input type="checkbox" checked={card.checked} onChange={() => handleCardToggle(card.id)} />
              <div style={{ width: '190px' }}>
                <div className={classes.titleCard} />
                <p
                  style={{
                    fontSize: '17px',
                    // paddingLeft: '12px',
                    fontWeight: '900',
                    marginBottom: '3px',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    // paddingLeft: '12px',
                    marginTop: '3px',
                    color: 'grey',
                  }}
                >
                  {card.description}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '12px', paddingLeft: '12px' }}>Price: {card.price}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddOn;
