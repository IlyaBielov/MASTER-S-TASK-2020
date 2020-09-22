const $textField = document.querySelector('#textField')
const $submitButton = document.querySelector('#submitButton')
const $textList = document.querySelector('#textList')

$submitButton.addEventListener('click', () => {
    if (!$textField.value) { return }

    const $listItem = createListItem($textField.value)

    addItemToList($listItem)
    addClassByTextField($listItem)

    $textField.value = null
})

$textField.addEventListener('keypress', (e) => {
    if (!$textField.value) { return }
    if (e.key !== 'Enter') { return }

    const $listItem = createListItem($textField.value)

    addItemToList($listItem)
    addClassByTextField($listItem)

    $textField.value = null
})

const createListItem = (itemValue) => {
    const $li = document.createElement('li')
    $li.innerHTML = itemValue

    return $li
}

const addItemToList = ($item) => {
    $textList.appendChild($item)
}

const addClassByTextField = ($item) => {
    const isHasSpecialSym = !!$item.innerText.match(/[!@#$%^&*(),.?":{}|<>]/g)

    console.log($item)

    if (isHasSpecialSym) {
        $item.classList.add('red')
    } else if ($item.innerText.length > 3) {
        $item.classList.add('green')
    }
}
