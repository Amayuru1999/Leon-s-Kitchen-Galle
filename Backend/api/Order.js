import User from '../models/User'
import Cart from '../models/Cart'
import Stripe from 'stripe'


export const getCheckoutSession =async(req,res)=>{
    try{
        //get current order
        const order=await Cart.findById(req.params.userId)
        const user=await User.findById(req.userId)

        const stripe=new Stripe(process.env.STRIPE_SECRET)

        //create stripe checkout session
        const session= await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/users/${user.id}`,
            customer_email:user.email,
            client_reference_id:req.params.userId,
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        unit_amount:order.price,
                        product_data:{
                            name:order.name,

                        }

                    },
                    quantity:1
                }
            ]
        })

        //create new order
        const ordering = new Order({
            order:order._id,
            user:user._id,
            price:order.price,
            session:session.id
        })

        await ordering.save()
        res.send(200).json({success:true,message:'Successfully paid',session})
    }catch(err){
        res
        .status(500)
        .json({success:false,message:"Error creating checkout session"})`;`
    }
}