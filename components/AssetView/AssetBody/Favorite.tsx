"use client";

import { checkFavoriteStatus, toggleFavorite } from "@/utils/mockData";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { FC, useCallback, useState } from "react";

interface FavoriteProps {
  id: string;
}

/**
 * this is pending a bunch of quility of life changes
 * 
 * - currently it needs to reload to check
 * - currently there's no way to see all favorites at once
 * - icon is to small/ not enough visualk changes when item is favrited. Maybe we can change the color of the button itself?
 */
const Favorite: FC<FavoriteProps> = ({ id }) => {

  const [isFavorite, setIsFavorite] = useState(checkFavoriteStatus(id));

  const handleFavorite = useCallback(() => {
    toggleFavorite(id);
    setIsFavorite(!isFavorite);
  }, [isFavorite, id]);

  return (
    <button
      className="w-full bg-blue-950 flex items-center justify-center text-white gap-2 p-2 rounded"
      onClick={handleFavorite}
    >
      {
        isFavorite
          ? <CiBookmarkCheck onClick={() => setIsFavorite(false)} size={30}/>
          : <CiBookmark onClick={() => setIsFavorite(true)} size={30} />
      }
      <h1 className="text-lg font-bold">Favorite</h1>
    </button>
  );
};

export default Favorite;