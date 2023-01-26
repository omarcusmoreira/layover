import { Button } from "@mui/material";
import './style.css'

interface RoomDescriptionProps {
    type: string;
    price: number;
    quantity: number;
    handleRemove: (index: string) => void;
    index: number;
}

export function RoomDescription({type,price,quantity,handleRemove,index}: RoomDescriptionProps) {
    return (
        <div className="room-infos-item-container">
            <div className="room-infos-item">
                <p>Tipo : {type}</p>
                <p>Preço Inicial : R${price}</p>
                <p>Quantidade : {quantity}</p>
            </div>
            <div>
                <Button 
                    onClick={()=>{handleRemove(index)}}
                >Remover</Button>
            </div>
        </div>
    )
}