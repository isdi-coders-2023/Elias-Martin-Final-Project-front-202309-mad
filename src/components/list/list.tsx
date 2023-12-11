import { useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { useClothes } from '../../hooks/use.clothes';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Filter } from '../filter/filter';

export function List() {
  const { clothes } = useSelector((state: RootState) => state.clothesState);
  const { loadClothes } = useClothes();

  useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  return (
    <>
      <div className="list-container">
        <div className="list-title-container">
          <h2>LAST DROP</h2>
        </div>
        <Filter></Filter>
        <ul className="clothes-list">
          {clothes.map((item) => (
            <Card key={item.id} clothingItem={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
