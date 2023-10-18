import React, { useState } from 'react';
import Calendar from 'react-calendar';
// o react-calendar fornece a marcação do dia atual
import 'react-calendar/dist/Calendar.css';
import { format, parse } from 'date-fns';

function EventCalendar() {

    // armazenar o evento correspondente à data selecionada
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    // array de objetos representando as datas e as nome dos eventos
    const eventDates = [
        { date: '20/10/2023', name: 'Feira SUIPA', local: 'Av. Dom Hélder Câmara, 1801 – Benfica, Rio de Janeiro', contato: '(21) 32978777', info: 'Sociedade União internacional protetora dos animais' },
        { date: '25/10/2023', name: 'Feira CCZ', local: 'Largo do Bodegão, nº150 – Santa Cruz – Rio de Janeiro', contato: '(21) 33954709', info: 'Centro de controle de Zoonoses em Santa Cruz' },
        { date: '11/11/2023', name: 'Feira Garra Animal', local: ' Av. Bartolomeu de Gusmão, 1120 – Mangueira, Rio de Janeiro ', contato: 'garranimalrj@gmail.com', info: 'Grupo de ação, resgate e reabilitação animal' },
    ];

    // função para definir o conteúdo de cada tile (quadradinho) no calendário
    const tileContent = ({ date, view }) => {
        //date e view são parâmetros fornecidos automaticamente pelo componente Calendar 
        if (view === 'month') {
            // formata a data para comparar com as dos eventos
            const formattedDate = format(date, 'dd/MM/yyyy');
            const eventOnDate = eventDates.find(event => event.date === formattedDate);
            // mostra uma bolinha na data com evento
            return eventOnDate ? <div className="bola-evento" /> : null;
        }
        return null;
    };


    // Função chamada ao clicar em um tile
    const mostraEvento = date => {
        // Formata a data selecionada
        const dataFormatada = format(date, 'dd/MM/yyyy');
        // Converte a data para um objeto Date usando a biblioteca date-fns
        // Encontra o evento correspondente à data
        const eventoNaData = eventDates.find(evento => evento.date === dataFormatada);

        // Atualiza os estados com a data e evento selecionados
        setEventoSelecionado(eventoNaData);
    };

    return (
        <div className='box'>
            <Calendar
                className='calendario'
                tileContent={tileContent}
                onClickDay={mostraEvento}
            />
            {eventoSelecionado ? (
                <div className="detalhes">
                    <div className='d2'>
                        <h3>{eventoSelecionado.name}</h3>
                        <p>{eventoSelecionado.info}</p>
                        <p>{eventoSelecionado.date}</p>
                        <p>{eventoSelecionado.local}</p>
                        <p>{eventoSelecionado.contato}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default EventCalendar;
