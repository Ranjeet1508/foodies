import { MenuItem } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type Props = {
    menuItem: MenuItem;
    addToCart: () => void;
}

const MyMenuItem = ({menuItem, addToCart}: Props) => {
  return (
    <Card className='cursor-pointer' onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>

      <CardContent className='font-bold'>
        {menuItem.price.toFixed(2)}
      </CardContent>
    </Card>
  )
}

export default MyMenuItem;
