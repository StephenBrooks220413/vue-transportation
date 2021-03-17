switch (selection) {
    case x:
        select = "You Selected 1 Week"
        break;
    case y:
        select = "You Selected 2nd Week"
        break;
    default:
        select = "You Selected tomorrow"
}

document.getElementById(selection).innerHTML = select;