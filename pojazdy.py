import os

vehicles = []

def add_vehicle():
    id = len(vehicles) + 1
    marka = input("Podaj markę pojazdu: ")
    model = input("Podaj model pojazdu: ")
    pojemnosc_silnika = input("Podaj pojemność silnika: ")
    rok_produkcji = input("Podaj rok produkcji: ")
    cena = input("Podaj cenę: ")
    vehicles.append({
        "ID": id,
        "Marka": marka,
        "Model": model,
        "Pojemnosc_silnika": pojemnosc_silnika,
        "Rok_produkcji": rok_produkcji,
        "Cena": cena
    })
    save_data()

def display_all_vehicles():
    for vehicle in vehicles:
        print(vehicle)
    input("Naciśnij Enter, aby wrócić do menu.")

def remove_vehicle():
    display_all_vehicles()
    id_to_remove = int(input("Podaj ID pojazdu do usunięcia: "))
    for vehicle in vehicles:
        if vehicle["ID"] == id_to_remove:
            vehicles.remove(vehicle)
            print("Pojazd usunięty.")
            save_data()
            return
    print("Nie znaleziono pojazdu o podanym ID.")

def display_vehicle():
    id_to_display = int(input("Podaj ID pojazdu do wyświetlenia: "))
    for vehicle in vehicles:
        if vehicle["ID"] == id_to_display:
            print(vehicle)
            input("Naciśnij Enter, aby wrócić do menu.")
            return
    print("Nie znaleziono pojazdu o podanym ID.")

def save_data():
    with open("pojazdy.txt", "w") as file:
        for vehicle in vehicles:
            for key, value in vehicle.items():
                file.write(f"{key}: {value}\n")
            file.write("\n")

def main():
    if os.path.exists("pojazdy.txt"):
        with open("pojazdy.txt", "r") as file:
            lines = file.read().split("\n\n")
            for line in lines:
                if line:
                    vehicle_data = line.split("\n")
                    vehicle = {}
                    for data in vehicle_data:
                        print(data)
                        key, value = data.split(": ")
                        vehicle[key] = value
                    vehicles.append(vehicle)

    while True:
        print("Wybierz opcję:")
        print("1. Dodaj pojazd")
        print("2. Wyświetl wszystkie pojazdy")
        print("3. Usuń pojazd")
        print("4. Wyświetl pojazd")
        print("5. Wyjdź")

        option = input("Podaj numer opcji: ")

        if option == "1":
            add_vehicle()
        elif option == "2":
            display_all_vehicles()
        elif option == "3":
            remove_vehicle()
        elif option == "4":
            display_vehicle()
        elif option == "5":
            print("Dziękujemy. Do widzenia!")
            break
        else:
            print("Nieprawidłowy wybór. Spróbuj ponownie.")

if __name__ == "__main__":
    main()