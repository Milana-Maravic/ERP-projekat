import { Grid, Button, Box, Typography } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { Order } from "../../app/models/order";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
    order: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
    const subtotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    console.log(order);
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ p: 2 }} gutterBottom variant='h4'>Porudzbina# {order.id} - {order.orderStatus}</Typography>
                <Button onClick={() => setSelectedOrder(0)} sx={{ m: 2 }} size='large' variant='contained'>Nazad na porudzbine</Button>
            </Box>
            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
            <Grid container sx={{ pt: 2 }}>
                <Grid item xs={6}>
{/*                     <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography> */}
                </Grid>
                <Grid item xs={6} sx={{ pl: 1 }}>
                    <BasketSummary subtotal={subtotal} />
                </Grid>
            </Grid>

        </>
    )
}