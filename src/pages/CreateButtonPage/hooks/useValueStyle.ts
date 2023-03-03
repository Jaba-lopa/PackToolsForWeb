import InterimStyleStorage from "../store/InterimStyleStorage";

interface valueStyles{
    [index: string]: any
}

export const useValueStyles = (type: string) => {
    const operationItem = InterimStyleStorage.getInterimButton().cssStyles[`${type}`];
    
    const operationItemKeys = Object.keys(operationItem);
    const operationItemValues = Object.values(operationItem);

    const operations: valueStyles = {};

    for (let i = 0; i < operationItemKeys.length; i++) {
        operations[`${operationItemKeys[i]}`] = operationItemValues[i];
    }

    return operations;
}