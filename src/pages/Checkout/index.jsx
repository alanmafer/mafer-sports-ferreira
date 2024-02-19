import React, {useState} from 'react';
import Item from '../../components/Item';
import { useCart } from '../../context/CartContext';
import FeatherIcon from 'feather-icons-react';

function Checkout() {
  const { cart, cartTotal, cleanCart } = useCart();
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {
    const foundCoupon = coupons.find((c) => c === coupon);
    if (foundCoupon) {
      const splitCoupon = foundCoupon.split(/[-_]/);
      const discountValue = parseInt(splitCoupon[1], 10);
      setDiscount(discountValue);

      toast.success('Desconto aplicado!')
    } else {
      setDiscount(null);
    }
  };
  
  const submit = () => {
    console.log({
        products: cart,
        address,
        payment,
        total: cartTotal() + 10 - (discount || 0),
        discount,
        coupon
    });

    cleanCart();

    setDiscount(0);
    setCoupon("");
    setPayment("");
    setAddress({
        cep: '',
        street: '',
        number: '',
        city: '',
        neighborhood: '',
        state: '',
    });

    // toast.success('Pedido efetuado!')
  }

  return (
    <div className="px-10 py-1 2xl:py-2">

         <h1 className="text-2xl text-center font-bold text-slate-900 2xl:mb-2">Finalizar pedido</h1>

         <div className="flex mt-5">
            <div className="flex flex-col w-3/5">
                <h2 className="text-2xl text-center font-bold text-slate-900">Itens no carrinho</h2>
                <div className="flex flex-col gap-3 h-[300px] 2xl:h-[550px] 2xl:mb-4 overflow-y-scroll ">

                    { cart.length === 0 && <p className="w-full font-semibold text-slate-700 text-center mt-16 text-lg">O carrinho está vazio</p>}

                    { cart.map((item) => <Item item={item} />)}

                </div>
            </div>

            <div className="flex flex-col w-2/5 ml-12">

                <h2 className="text-xl font-bold text-slate-900 text-center">Pagamento</h2>

                <div className="rounded bg-white p-5">

                  <div className="flex justify-between">
                    <p className="font-semibold text-slate-700">Subtotal</p>
                    <span className="font-bold text-slate-700">{
                        cartTotal()?.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </span>
                  </div>

                  <div className="flex justify-between">
                      <p className="font-semibold text-slate-700">Entrega</p>
                      <span className="font-bold text-slate-700">R$ 10,00</span>
                  </div>

                </div>

                <div className="flex justify-between my-6">

                  <p className="font-semibold text-slate-700">Aplicar cupom</p>

                  <div className="flex">
                    <input 
                        type="text" 
                        placeholder="Digite um cupom" 
                        className="border-2 border-slate-700 rounded mr-2 px-2" 
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}/>

                    <div className="bg-blue-500 rounded p-1" onClick={applyCoupon}>
                        <FeatherIcon icon='check' className="text-white" />
                    </div>

                  </div>

                </div>

                <div className="flex justify-between">
                  <p className="font-semibold text-xl text-slate-700">Total</p>
                  <span className="font-bold text-xl text-slate-700">{
                      (cartTotal() + 10)?.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                      })
                  }</span>
                </div>

                <h3 className="font-semibold text-slate-700 mt-5">Selecione o método de pagamento</h3>

                <div className="flex gap-8 mt-3">

                  <label>
                    <input type="radio" name="payment" value="money" onChange={(e) => setPayment(e.currentTarget.value)} />
                        Dinheiro
                  </label>

                  <label>
                      <input type="radio" name="payment" value="debit" onChange={(e) => setPayment(e.currentTarget.value)} />
                      Débito
                  </label>

                  <label>
                      <input type="radio" name="payment" value="credit" onChange={(e) => setPayment(e.currentTarget.value)} />
                      Crédito
                  </label>

                  <label>
                      <input type="radio" name="payment" value="pix" onChange={(e) => setPayment(e.currentTarget.value)} />
                      PIX
                  </label>

                </div>

                <button onClick={submit} className="w-full bg-gray-700 rounded px-3 py-2 text-white font-semibold text-lg cursor-pointer mt-6 hover:bg-gray-600">
                  Finalizar
                </button>

            </div>

         </div>

    </div>
  )
}

export default Checkout;