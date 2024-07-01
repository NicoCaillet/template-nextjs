import React, { useState } from "react";
import styled from "styled-components";

const seatingArrangement = [
  { row: 1, seats: 6 },
  { row: 2, seats: 5 },
  { row: 3, seats: 5 },
  { row: 4, seats: 6 },
  { row: 5, seats: 6 },
];

const Seat = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const MapaCine = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId: number) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  return (
    <div className="mt-5">
      {seatingArrangement.map((row) => (
        <Row key={row.row}>
          {Array.from({ length: row.seats }, (_, index) => {
            const seatId = `R${row.row}S${index + 1}`;
            return (
              <div
                key={seatId}
                // selected={selectedSeats.includes(seatId)}
                onClick={() => handleSeatClick(seatId)}
                className="bg-red-500 m-4 w-[30px] rounded"
              >
                .
              </div>
            );
          })}
        </Row>
      ))}
    </div>
  );
};

export default MapaCine;
