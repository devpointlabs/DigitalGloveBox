# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.first.cars.create(
  make: 'Honda',
  model: 'Accord',
  year: '1988',
  color: 'Cyan',
  license_plate: 'X12-52S',
  policy_exp: '100',
  roadside_ass: true,
  miles: 20000,
  vin: '235236SG223236',
  policy_number: '235JSGgWR-G',
  insurance_prov_num: 'USAA12634134',

    )

puts 'Car Seeded'