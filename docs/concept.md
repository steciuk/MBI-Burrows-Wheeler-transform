# Koncepcja realizacji projektu

## Cel

Celem niniejszego projektu jest stworzenie aplikacji pozwalającej zrozumieć działanie algorytmu transformaty Burrowsa-Wheelera i procesu do niej odwrotnego. Aplikacja umożliwi wprowadzenie własnych danych i śledzić (krok po kroku) sposób wykonywania obliczeń. Aplikacja powinna wykonywać się na przeglądarce www, będzie umieszczona na serwerze elektron (elka). Do działania aplikacji nie jest potrzebna baza danych - aplikacja jest zbiorem statycznych plików, które wykonują się po stronie klienta w przeglądarce www.

## Założenia dotyczące stosu technologicznego projektu

- Aplikacja powstanie z użyciem biblioteki _React_.
- Wykorzystanym w projekcie językiem programowania będzie _TypeScript_.
- Zostaną stworzone testy jednostkowe z wykorzystaniem biblioteki _Jest_.
- Testy End-To-End, ze względu na małe skomplikowanie architektury aplikacji zostaną przeprowadzone w sposób manualny, zgodnie z wcześniej zdefiniowanymi scenariuszami.
- Aplikacja zostanie przetestowana przy użyciu serwisu [BrowserStack](https://www.browserstack.com/), w celu sprawdzenia poprawnego działania w różnych przeglądarkach internetowych oraz na różnych urządzeniach i systemach operacyjnych.

## Konfiguracja środowiska developerskiego

- Projekt będzie tworzony z wykorzystaniem _Visual Studio Code_.
- W projekcie zostanie skonfigurowany linter _ESlint_ dbający o spójność składniową oraz pomagający z wyprzedzeniem znajdować błędy w kodzie źródłowym.
- W projekcie zostanie skonfigurowane ustawienia automatycznego formatowania kodu źródłowego przy wykorzystaniu rozszerzenia _Prettier_. Takie rozwiązanie pozwoli zachować spójność stylu tworzonego kodu źródłowego w obszarze całego projektu.

## Opis algorytmu transformaty Burrowsa-Wheelera

Jest to algorytm w uproszczeniu służący do transformacji danego łańcucha tekstowego w łańcuch składający się z tych samych znaków ale o zmienionych pozycjach znaków. Omawiana transformata służy w ogólności do bezstratnej kompresji danych, ponieważ niewielkim kosztem można znacznie zwiększyc efektywnośc kompresji danych i jest ona reguły stosowana na samym początku procesu kompresji - dane przetworzone tą transformatą można następnie skompresowac za pomocą bardziej klasycznych sposóbów kompresji. Jest to spowodowane tym, że dla powtarzających się ciągów znaków w łańcuchu, wynik transformaty będzie zawierał kilka miejsc, w których te same znaki będą znajdowac się obok siebie, co z kolei pozwala na łatwiejszą kompresję innymi sposobami.


Jedną z najważniejszych cech tej transformaty jest fakt, że może byc ona odwrócona, bez żadnych kosztów, oprócz przechowania pozycji pierwszego znaku oryginalnego tekstu. 

### Przykładowa implementacja transformaty BWT

Najprostsza implementacja algorytmu transformaty Burrowsa-Wheelera polega na pobraniu oryginalnego łańcucha tekstowego, następnie wykonanie jego wszystkich rotacji (ostatni znak łańcucha należy przenieśc na początek łańcucha tesktowego), następnie posortowaniu ich leksykograficznie. Zachowujemy ostatni bajt każdej rotacji, w kolejności ich leksykograficznego wystąpienia, a także indeks pierwszego znaku oryginalnego łańcucha, w tablicy posortowanych permutacji łańucha.

Przykład:

banana

Rotacje:
banana
abanan
nabana
anaban
nanaba
ananab

Posortowane rotacje:

abanan

anaban

ananab

banana

nabana

nanaba

Wynikiem transformaty jest: **nnbaaa**

Indeks pierwszego znaku oryginalnego łańcucha w tablicy posortowanych permutacji: 3

### Przykładowa implementacja odwrotnej transformaty BWT

Odwrotna transformata Burowsa-Wheelera polega na...
TODO: który sposób implementacji?


## Plan rozwiązania

Wynikiem niniejszego projektu ma byc prawidłowo działająca aplikacja webowa, która będzie mogła by uruchomiona na stronie www. Aplikacja będzie pozwalała na wykonanie algorytmu krok po kroku, ale także na uruchomienie algorytmu i natychmiastowe zwrócenie wyniku. Użytkownik będzie mógł wybrac sposób działania algorytmu (krok po kroku lub bezpośredni wynik) za pomocą odpowiednich przycisków w interfejsie graficznym aplikacji takich jak:
- "Następny krok" ("Next step")
- "Oblicz i pokaż wynik" ("Compute and show result")

Tabele ukazujące obliczenia pośrednie będą wyświetlane niezależnie od wybranego sposobu wykonywania algorytmu.

Po zwróceniu wyniku transformaty Burrowsa-Wheelera aplikacja pozwoli na wykonanie odwrotnej transformaty przez wyświetlenie dodatkowych przycisków i stosowną informację w interfejsie graficznym aplikacji. W tym kroku również użytkownik będzie mógł wybrac sposób wykonania algorytmu używając takich samych przycisków j. w. D



