import React, { useState } from 'react';
import Navbar from './Navbar';

interface FilterObj {
  name: string;
  property: string;
  value: number;
  range: {
    min: number;
    max: number;
  };
  unit: string;
}

const initialFilters: FilterObj[] = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: { min: 0, max: 200 },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: { min: 0, max: 100 },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: { min: 0, max: 100 },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: { min: 0, max: 360 },
    unit: 'deg',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: { min: 0, max: 20 },
    unit: 'px',
  },
];

function App(): React.JSX.Element {
  const [filters, setFilters] = useState<FilterObj[]>(initialFilters);
  const [imagelink, setImageLink] = useState<string>(
    'https://images.unsplash.com/photo-1500964757637-c85e8a162699'
  );

  const handleFilterChange = (index: number, value: number): void => {
    setFilters((prevFilters) => {
      const updatedFilters = [...prevFilters];
      updatedFilters[index].value = value;
      return updatedFilters;
    });
  };

  return (
    <main>
      <Navbar onChangeImageLink={setImageLink} />
      <div className="wrapper">
        <div className="image_wrapper">
          <div className="image">
            <img
              src={imagelink}
              alt="hd_jungle"
              style={{
                filter: filters
                  .map(
                    (filter) =>
                      `${filter.property}(${filter.value}${filter.unit})`
                  )
                  .join(' '),
              }}
            />
          </div>
        </div>

        <div className="options">
          {filters.map((filter, index) => (
            <div className="mode" key={filter.name}>
              <span>{filter.name}</span>
              <input
                type="range"
                min={filter.range.min}
                max={filter.range.max}
                value={filter.value}
                onChange={(e) =>
                  handleFilterChange(index, Number(e.target.value))
                }
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
