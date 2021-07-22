import React  from 'react';

const Display = (props) => {
    const { boxesList } = props;
    return (
        <div>
            {
                boxesList.map((box, index) => (
                    <div key={ index }
                    style={{
                    backgroundColor: box.color,
                    width: box.size,
                    height: box.size,
                    margin: "20px",
                    display: "inline-block"
                    }}>
                    </div>
                ))
            }
        </div>
    )
}
export default Display;