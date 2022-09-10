import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css'


function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-title">Vendas</h2>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead className="">
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">1</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">100</td>
                                <td className="show992">543</td>
                                <td>R$ 2000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">2</td>
                                <td className="show576">09/07/2022</td>
                                <td>Jonas</td>
                                <td className="show992">300</td>
                                <td className="show992">470</td>
                                <td>R$ 3000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">3</td>
                                <td className="show576">11/09/2022</td>
                                <td>Francisco</td>
                                <td className="show992">200</td>
                                <td className="show992">590</td>
                                <td>R$ 5000,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


export default SalesCard;