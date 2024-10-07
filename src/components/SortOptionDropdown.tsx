import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';


type Props = {
    onChange: (value: string) => void;
    sortOption: string;
}

const SORT_OPTION = [
    {
        label: "Best match",
        value: "bestMatch" 
    },
    {
        label: "Delivery Price",
        value: "deliveryPrice" 
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime" 
    }
]

const SortOptionDropdown = ({onChange, sortOption}: Props) => {
const selectedSortLabel = SORT_OPTION.find((option) => option.value === sortOption )?.label || SORT_OPTION[0].label;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer'>
        <Button variant={'outline'} className='w-full'>
            Sort by: {selectedSortLabel}
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {SORT_OPTION.map((option) => (
            <DropdownMenuItem 
            className='cursor-pointer' 
            onClick={() => onChange(option.value)}>
                {option.label}
            </DropdownMenuItem>

        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortOptionDropdown
