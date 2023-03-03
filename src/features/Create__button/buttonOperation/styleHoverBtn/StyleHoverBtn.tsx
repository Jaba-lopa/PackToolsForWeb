import { observer } from "mobx-react";
import OperationColor from "../../../../entities/Create__button/OperationColor/OperationColor";
import OperationItem from "../../../../entities/Create__button/OperationItem/OperationItem";
import { useValueStyles } from "../../../../pages/CreateButtonPage/hooks/useValueStyle";
import { operations } from "../operationsInterface";
import cl from '../StyleOperation.module.scss';

const operationItems = [
    {title: 'Тень offset-x', style: 'shadowXHov', unit: 'px'},
    {title: 'Тень offset-y', style: 'shadowYHov', unit: 'px'},
    {title: 'Размытие тени', style: 'shadowBlurHov', unit: 'px'},
    {title: 'Тень во все стороны', style: 'shadowSpreadHov', unit: 'px'}
]

const operationColor = [
    {title: 'Цвет кнопки', style: 'backgroundColorHov'},
    {title: 'Цвет обводки', style: 'borderColorHov'},
    {title: 'Цвет текста', style: 'colorHov'},
    {title: 'Цвет тени', style: 'shadowColorHov'}
]

const StyleHoverBtn = () => {
    const operations: operations = useValueStyles('stylesHover');

    return(
        <div  className={cl.styleBtn}>
            <div className={cl.styleBtn__color}>
                {operationColor.map((el, index) => 
                    <OperationColor type='stylesHover' style={el.style} key={el.title} title={el.title}  valueStyle={operations[`${el.style}`]}/>
                )}
            </div> 

            <div className={cl.styleBtn__operationsWrapper}>
                {operationItems.map((el, index) => 
                    <OperationItem type='stylesHover' style={el.style} key={el.title} title={el.title} unit={el.unit}  valueStyle={operations[`${el.style}`]}/>
                )}
            </div>
        </div>
    )
}

export default observer(StyleHoverBtn);