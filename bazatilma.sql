-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-06-2022 a las 12:39:25
-- Versión del servidor: 8.0.29-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bazatilma`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Calificación`
--

CREATE TABLE `Calificación` (
  `idUsuarioCalificado` bigint NOT NULL,
  `idUsuarioCalificador` bigint NOT NULL,
  `estrellas` int NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Volcado de datos para la tabla `Calificación`
--

INSERT INTO `Calificación` (`idUsuarioCalificado`, `idUsuarioCalificador`, `estrellas`, `comentario`) VALUES
(1, 2, 5, 'Excelente vendedor'),
(2, 1, 4, 'Pesimo comprador'),
(1, 3, 3, 'Vendedor confiable'),
(7, 1, 5, 'Es un amor de persona'),
(5, 8, -1, 'Necesita poner mas imagenes'),
(5, 1, 3, 'Excelente servicio'),
(5, 7, 5, 'Entrega a tiempo el producto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carrito`
--

CREATE TABLE `Carrito` (
  `idProducto` bigint NOT NULL,
  `idUsuario` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Volcado de datos para la tabla `Carrito`
--

INSERT INTO `Carrito` (`idProducto`, `idUsuario`) VALUES
(2, 1),
(1, 1),
(2, 2),
(6, 1),
(1, 5),
(2, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorías`
--

CREATE TABLE `Categorías` (
  `idCategoria` bigint NOT NULL,
  `categoria` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Volcado de datos para la tabla `Categorías`
--

INSERT INTO `Categorías` (`idCategoria`, `categoria`) VALUES
(1, 'Accesorios'),
(2, 'Muebles'),
(3, 'Libros, revistas y comics'),
(4, 'Electrodomésticos'),
(5, 'Consolas y videojuegos'),
(6, 'Electronica, audio y video'),
(7, 'Ropa, moda'),
(8, 'Papelería'),
(9, 'Computación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Mensajes`
--

CREATE TABLE `Mensajes` (
  `idMensaje` bigint NOT NULL,
  `idUsuarioRX` bigint NOT NULL,
  `idUsuarioTX` bigint NOT NULL,
  `mensaje` text NOT NULL,
  `horaMensaje` time NOT NULL,
  `fechaMensaje` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--

CREATE TABLE `Productos` (
  `idProducto` bigint NOT NULL,
  `nombreProducto` text NOT NULL,
  `descripción` text NOT NULL,
  `precio` float NOT NULL,
  `idCategoria` bigint NOT NULL,
  `estadoProducto` int NOT NULL,
  `idUsuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Volcado de datos para la tabla `Productos`
--

INSERT INTO `Productos` (`idProducto`, `nombreProducto`, `descripción`, `precio`, `idCategoria`, `estadoProducto`, `idUsuario`) VALUES
(1, 'Aretes de aro plateados', 'Aretes de tipo aro de color plateado de mujer o hombre', 55, 1, 0, 1),
(2, 'Collar metalico de hombre', 'Collar de acero inoxidable para hombre de color plata', 72, 1, 0, 1),
(3, 'Nintendo Switch 32GB Standard color rojo neón, azul neón y negro', 'Con tu consola Switch tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nSwitch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.\r\n\r\nNintendo Switch es una consola desmontable, que puede usarse en modo portátil, sobremesa o en la TV; esto te brindará la posibilidad de utilizarla donde quieras y compartir sus controles.\r\n\r\nLos Joy-con cuentan con botones especiales para realizar print de pantalla. Además, posee una cámara infrarroja que puede leer la distancia respecto a los objetos e incluso detectar formas.\r\n\r\nAdaptada a tus necesidades\r\nGuarda tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 32 GB.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras juegas.\r\n\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.', 6547.87, 5, 1, 5),
(4, 'Proyector Vagalbox MX-1972 3000lm blanco y negro 100V/240V', 'Descripción\r\nPresentaciones de gran impacto\r\nCon el proyector MX-1972 de 3000 lúmenes podrás realizar presentaciones en auditorios o proyectar material audiovisual en espacios grandes, incluso en ambientes con una alta iluminación natural o artificial. Es ideal para hoteles, salas de reuniones y museos.', 1746.93, 6, 1, 7),
(5, 'Audífonos gamer HyperX Cloud Stinger Core 7.1 negro', '¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Stinger Core 7.1 no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para ti\r\nEl diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.', 1399, 6, 1, 1),
(6, 'Libro La Elegancia Del Erizo', 'El vendedor no incluyó una descripción del producto', 788, 3, 1, 5),
(7, 'Repetidor, Range extender Xiaomi Mi Wi-Fi Range Extender Pro R03 negro 100V/240V', 'El repetidor Xiaomi Wi-Fi Range Extender Pro es capaz de amplificar la señal de internet de 80 a 150 m2. De esta manera, te permitirá llevar wifi a esos rincones donde hoy no llega.\r\n\r\nDoble antena, mejor rendimiento\r\nSus dos antenas externas hacen que la cobertura sea más amplia y con menos interferencia, para que puedas navegar sin interrupciones.\r\n\r\nMás señal sin complicaciones\r\nEs compatible con distintas marcas de routers y no requiere instalación ya que con la tecnología Plug and Play es más fácil de usar. ¡Comienza a disfrutar de una conexión óptima!\r\n', 299, 9, 1, 7),
(8, '3 Pares Aretes Bañados En Oro Plata Negro Hombre Y Mujer', 'Bienvenido a revisar los productos, vendo una variedad de productos, los precios son muy favorables, si está interesado en otros productos, puede contactarme o visitar mi tienda:\r\nhttps://listado.mercadolibre.com.mx/_CustId_477093726\r\n=============================================================\r\nMaterial de acero inoxidable: acero inoxidable\r\nCantidad: 3 par\r\nColor: oro/acero/negro\r\nTamaño: 14mm', 146.3, 1, 1, 1),
(9, 'Kit 35 Piezas Profesional De Dibujo Con Lápices Hb', 'Características:\r\ncalidad superior: grafito con cuerpo resistente a la luz y a la intemperie, borrado limpio\r\n\r\ny alta opacidad. Seguro y no tóxico: todos los lápices de dibujo y herramientas son detectados, inofensivo para ti\r\n\r\ny tu familia. Combinación sin tener que preocuparse por las cosas perdidas y conseguir fácilmente bocetos\r\n\r\nUn regalo ideal para Navidad, cumpleaños, Año Nuevo, San Valentín, etc. y excelente conjunto para adultos, niños y estudiantes de la escuela de arte.\r\n\r\nLo que obtienes\r\n: 14 lápices de dibujo premium: 5H, 4H, 3H, 2H, HB, B, 2B, 2B, 3B, 4B, 4B, 5B, 5B, 6B, 8B\r\n3 Lápices de carbón: suave, mediano\r\n, duro 3\r\nVarilla de carbón: suave, mediano, duro\r\n3 tocones de papel mezclado 1\r\n1. Lápiz 6B\r\n1 - Metal Doble Agujero Sacapuntas\r\n1 - Sacapuntas Negro\r\n1 - Borrador amasado\r\n1 - Doble Cabeza Extensor\r\n1 - Papel de Lija Puntero\r\n1 - Borrador de goma\r\n1 - Cuchillo de metal\r\n1 - Papel de boceto', 257.66, 8, 1, 8),
(10, 'Tv stick Realme 4K Smart TV Stick de voz 4K 8GB negro con 2GB de memoria RAM', 'Similar a un compacto reproductor de MP3 pero recargado de funcionalidades multimedia. El TV stick Realme 4K Smart TV Stick se conecta a múltiples dispositivos para disfrutar de las aplicaciones disponibles. ¿Música? ¿Videos? Todo esto y más para pasar horas de diversión frente a la pantalla.\r\n\r\nCalidad de imagen\r\nSu compatibilidad con streaming en 4K convierte a este reproductor en la mejor elección a la hora de disfrutar de imágenes nítidas y una calidad sobresaliente, notoriamente superior al HD y Full HD. Su excelencia se refleja en la capacidad de transmitir colores más realistas y con lujo de detalles.\r\n\r\nDiversión asegurada\r\nEs compatible con distintas plataformas con las cuales accederás a lo mejor del cine, series, música y programas de TV.\r\n\r\nManejo simple\r\nA diferencia de los controles estándares, este aparato posee la función de control de voz. Con la misma, manejarlo es muy simple. Responde a tus órdenes con tan solo hablarle.', 1314.07, 6, 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `idUsuario` bigint NOT NULL,
  `nombreUsuario` text NOT NULL,
  `apellidosUsuario` text NOT NULL,
  `nickname` text NOT NULL,
  `telefono` text NOT NULL,
  `correo` text NOT NULL,
  `contrasenya` text NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `rol` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`idUsuario`, `nombreUsuario`, `apellidosUsuario`, `nickname`, `telefono`, `correo`, `contrasenya`, `fechaNacimiento`, `rol`) VALUES
(1, 'Samuel', 'Ventura Mejía', 'Ghostix', '9535565759', 'venturamejiasamuel@gmail.com', '1234', '2000-10-24', 1),
(2, 'Heriberto Luis', 'Lopéz Zurita', 'Hedi', '9531199838', 'lopezzuritaluisheriberto', '1234', '2001-02-20', 0),
(3, 'Andrea', 'García García', 'Andys', '9581061362', 'garciagarciaandrea@gmail.com', '1234', '1996-05-09', 0),
(4, 'Mario Antonio', 'Ayala Ruiz', 'Marito', '9711373192', 'ayalaruizmarioantonio@gmail.com', '1234', '2001-01-17', 0),
(5, 'Blanca Nieves', 'Enríquez Pacheco', 'Blanca', '9513119982', 'enríquezpachecoblancanieves@gmail.com', '1234', '1997-06-20', 1),
(6, 'Victor Raúl', 'Rubalcaba Barajas', 'Vic', '4492651758', 'rubalcababarajasvictorraul@gmail.com', '1234', '1997-03-30', 0),
(7, 'Anayeli', 'Sandoval Celestino', 'Naye', '---', 'sandovalcelestinoanayeli@gmail.com', '1234', '2001-10-07', 1),
(8, 'Maria Guadalupe', 'Hernadez Morales', 'Lupe', '9511135803', 'hernandezmoralesmariaguadalupe@gmail.com', '1234', '2001-12-12', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Categorías`
--
ALTER TABLE `Categorías`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `Mensajes`
--
ALTER TABLE `Mensajes`
  ADD PRIMARY KEY (`idMensaje`);

--
-- Indices de la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Categorías`
--
ALTER TABLE `Categorías`
  MODIFY `idCategoria` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `Mensajes`
--
ALTER TABLE `Mensajes`
  MODIFY `idMensaje` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Productos`
--
ALTER TABLE `Productos`
  MODIFY `idProducto` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `idUsuario` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
