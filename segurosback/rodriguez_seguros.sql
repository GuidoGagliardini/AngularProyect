-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2020 a las 03:14:57
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rodriguez_seguros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_accpersonales`
--

CREATE TABLE `consulta_accpersonales` (
  `id_accpersonales` int(11) NOT NULL,
  `nombre_accpersonales` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_accpersonales` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_accpersonales` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `consulta_accpersonales`
--

INSERT INTO `consulta_accpersonales` (`id_accpersonales`, `nombre_accpersonales`, `email_accpersonales`, `telefono_accpersonales`) VALUES
(2, 'ogiuiauofi', 'guido.hg@hotmailcom', 54165156),
(3, 'ogiuiauofi', 'guido.hg@hotmailcom', 54165156),
(4, 'ogiuiauofi', 'guido.hg@hotmailcom', 54165156),
(5, 'guido', 'guido.hg@hotmailcom', 1569809105),
(6, 'guido', 'guido.hg@hotmailcom', 1569809105);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_art`
--

CREATE TABLE `consulta_art` (
  `id_art` int(11) NOT NULL,
  `nombre_art` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_art` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_art` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_automoto`
--

CREATE TABLE `consulta_automoto` (
  `id_automoto` int(11) NOT NULL,
  `nombre_automoto` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_automoto` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_automoto` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `consulta_automoto`
--

INSERT INTO `consulta_automoto` (`id_automoto`, `nombre_automoto`, `email_automoto`, `telefono_automoto`) VALUES
(1, 'prueba 1', 'guido.hg@hotmail.com', 1569809105),
(2, 'prueba 1', 'guido.hg@hotmail.com', 1569809105),
(3, 'prueba 1', 'guido.hg@hotmail.com', 1569809105),
(4, 'prueba 1', 'guido.hg@hotmail.com', 1569809105),
(5, 'prueba 3', 'guido.hg@hotmail.com', 1569809105),
(6, 'prueba 3', 'guido.hg@hotmail.com', 1569809105),
(7, 'guido', 'guido.hg@hotmail.com', 2147483647),
(8, 'guido', 'guido.hg@hotmail.com', 2147483647),
(9, 'guidote AUTO MOTO', 'guidote@gngngn', 15656),
(10, 'guidote AUTO MOTO', 'guidote@gngngn', 15656),
(11, 'guidote AUTO MOTO2', 'guidote@gngngn', 15656);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_comercio`
--

CREATE TABLE `consulta_comercio` (
  `id_comercio` int(11) NOT NULL,
  `nombre_comercio` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_comercio` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_comercio` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `consulta_comercio`
--

INSERT INTO `consulta_comercio` (`id_comercio`, `nombre_comercio`, `email_comercio`, `telefono_comercio`) VALUES
(1, 'prueba 1', 'papaya@hotmail.com', 15659898),
(2, 'prueba 1', 'papaya@hotmail.com', 15659898),
(4, 'enero2020', 'guido.hg@hotmail.com', 1569809105);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_consorcio`
--

CREATE TABLE `consulta_consorcio` (
  `id_consorcio` int(11) NOT NULL,
  `nombre_consorcio` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_consorcio` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_consorcio` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `consulta_consorcio`
--

INSERT INTO `consulta_consorcio` (`id_consorcio`, `nombre_consorcio`, `email_consorcio`, `telefono_consorcio`) VALUES
(1, 'prueba1 ', 'guido.hg@hotmail.com', 123141341),
(2, 'prueba1 ', 'guido.hg@hotmail.com', 123141341),
(3, 'guido prueba 1', 'guido.hg@hotmail.com', 1569809105),
(4, 'guido prueba 1', 'guido.hg@hotmail.com', 1569809105),
(5, 'este ese el de ART', 'guido.hg@hotmail.com', 1569809105),
(6, 'este ese el de ART', 'guido.hg@hotmail.com', 1569809105),
(7, 'guido', 'email@emial', 2147483647),
(8, 'guido', 'email@emial', 2147483647),
(9, 'guido', 'guido.hg@hotmail.com', 1569809105),
(10, 'guiog', 'guido.hg@hotmail.com', 1569809105),
(11, 'asdasdas', 'asdasdasdasdas@hotmail', 14516),
(12, 'asdasdas', 'asdasdasdasdas@hotmail', 14516);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta_hogar`
--

CREATE TABLE `consulta_hogar` (
  `id_hogar` int(11) NOT NULL,
  `nombre_hogar` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_hogar` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_hogar` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `consulta_hogar`
--

INSERT INTO `consulta_hogar` (`id_hogar`, `nombre_hogar`, `email_hogar`, `telefono_hogar`) VALUES
(14, 'prueba hogar', 'email@hogar', 14616);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto_pagina`
--

CREATE TABLE `contacto_pagina` (
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_contacto` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_contacto` int(50) NOT NULL,
  `consulta_contacto` text COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `contacto_pagina`
--

INSERT INTO `contacto_pagina` (`id_contacto`, `nombre_contacto`, `email_contacto`, `telefono_contacto`, `consulta_contacto`) VALUES
(7, 'guido', 'guido.hg@hotmail.com', 156809188, 'estoy probando como anda el 27 de septiembre luego de hacer la cagada mas grande de mi vida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones`
--

CREATE TABLE `cotizaciones` (
  `id_cot` int(11) NOT NULL,
  `nombre_cot` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni_cot` int(20) NOT NULL,
  `fechaNac_cot` int(20) NOT NULL,
  `localidad_cot` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `marca_cot` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `modelo_cot` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ano_cot` int(11) NOT NULL,
  `pago_cot` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email_cot` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `puertas_cot` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `cotizaciones`
--

INSERT INTO `cotizaciones` (`id_cot`, `nombre_cot`, `dni_cot`, `fechaNac_cot`, `localidad_cot`, `marca_cot`, `modelo_cot`, `ano_cot`, `pago_cot`, `email_cot`, `puertas_cot`) VALUES
(3, 'ggg', 654654, 2019, 'hgdhdf', 'g', 'gfsgdf', 12, 'TARJETA', '', 0),
(6, 'Guido', 3234, 2019, 'fdsfd', 'h', 'sdfn', 0, 'TARJETA', '', 0),
(7, 'Guido', 3234, 2019, 'fdsfd', 'h', 'sdfn', 0, 'TARJETA', '', 0),
(8, 'Guido', 3234, 2019, 'fdsfd', 'h', 'sdfn', 0, 'TARJETA', '', 0),
(10, 'prueba', 3, 2899, 'capital', 'gol', 'veve', 0, 'EFECTIVO', '', 0),
(11, 'prueba', 3, 2899, 'capital', 'gol', 'veve', 0, 'EFECTIVO', '', 0),
(12, 'prueba', 3, 2899, 'capital', 'gol', 'veve', 0, 'EFECTIVO', '', 0),
(13, 'enero2020', 3555445, 1993, 'capital', 'gol', 'pepep', 2020, 'EFECTIVO', '', 0),
(15, 'guido', 35555, 1993, 'capital federal', 'gol', 'aefmaf', 1616, 'EFECTIVO', '', 0),
(17, 'sadad', 35555, 4445, 'dfacadca', 'adcadca', 'acdaca', 1616, 'CBU', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguros`
--

CREATE TABLE `seguros` (
  `id_s` int(11) NOT NULL,
  `nombre_s` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seguros`
--

INSERT INTO `seguros` (`id_s`, `nombre_s`, `titulo`, `descripcion`, `imagen`) VALUES
(1, 'Accidentes Personales', 'ACCIDENTES PERSONALES', 'Se trata de un seguro para personas y brinda cobertura en caso de que se produzca un accidente o una muerte ocasionada por un accidente contempladas en la póliza que se haya contratado. ... Algunos ejemplos son: invalidez por accidente, coberturas de', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/accidentes2.jpg'),
(2, 'A R T', 'Accidentes Riesgo de Trabajo', 'Las Aseguradoras de Riesgos del Trabajo (ART) son empresas privadas contratadas por los empleadores para asesorarlos en las medidas de prevención y para reparar los daños en casos de accidentes de trabajo o enfermedades profesionales.', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/art.jpg'),
(3, 'Auto/Moto', 'Autos y motocicletas', 'Cubre los daños del vehículo asegurado (total o parcial). Normalmente la póliza contempla dos coberturas adicionales que pueden contratarse conjuntamente o en forma separada, éstas son responsabilidad civil y robo, hurto o uso no autorizado del vehíc', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/automoto2.jpg'),
(4, 'Comercio', 'Protega su Comercio', '¿Qué son los seguros para comercios? Es un seguro que cubre tu comercio de forma global. Lo hace ofreciéndote una indemnización en caso de robo de bienes o mercaderías, incendio o por situaciones donde una persona se vea perjudicada por tu responsabi', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/comercio2.jpg'),
(5, 'Consorcio', 'SEGURO DE CONSORCIO', 'Incendio: en las partes comunes del edificio, así como del mobiliario de propiedad común.\r\nRobo o hurto: del mobiliario de propiedad común y también los daños que sufran los mismos como consecuencia del robo y/o su tentativa.\r\nDaños a cristales, vidr', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/Consorcio.jpg'),
(6, 'HOGAR', 'Cuide su hogar', 'Cubre el daño o pérdida que afecte a los aparatos o equipos electrónicos de uso doméstico especificados, por la acción directa o indirecta de Incendio, Rayo o Explosión y por Robo, Hurto o Accidente, mientras se encuentren dentro del domicilio del ri', 'https://rodriguezimagenes.s3-sa-east-1.amazonaws.com/frontend/hogar2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `siniestros`
--

CREATE TABLE `siniestros` (
  `id_sin` int(11) NOT NULL,
  `fecha_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `hora_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `calle_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `entrecalle_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `entrecalle2_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `localidad_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `formaocurrencia_sin` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `danos_sin` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `asegurado_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `patente_sin` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombretercero_sin` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dnitercero_sin` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `autotercero_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `segurotercero_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `danotercero_sin` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen_sin` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `siniestros`
--

INSERT INTO `siniestros` (`id_sin`, `fecha_sin`, `hora_sin`, `calle_sin`, `entrecalle_sin`, `entrecalle2_sin`, `localidad_sin`, `formaocurrencia_sin`, `danos_sin`, `asegurado_sin`, `patente_sin`, `nombretercero_sin`, `dnitercero_sin`, `autotercero_sin`, `segurotercero_sin`, `danotercero_sin`, `imagen_sin`) VALUES
(6, '1898-04-04', '1550', 'fragueiro', 'aasda', 'asdad', 'capital federal', 'me hizo mierda', 'me hizo mal toda la pueerta', 'guidote', 'Ad 845 AX', 'guidote', '6546546', 'sadasad', 'asdasda', 'asdaasdsadsa', '6f58f974-d966-4dd3-aadf-4d75f7720bc9jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_u` int(11) NOT NULL,
  `usuario_u` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password_u` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `permisos_u` tinyint(4) NOT NULL DEFAULT 0,
  `email_u` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `activated` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `verify_code` varchar(500) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `usuario_u`, `password_u`, `permisos_u`, `email_u`, `activated`, `available`, `verify_code`) VALUES
(1, 'gonzarodriguez', 'velez1994', 1, '', 0, 0, ''),
(2, 'dani', 'hola', 1, 'guido.hg@hotmail.com', 1, 1, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consulta_accpersonales`
--
ALTER TABLE `consulta_accpersonales`
  ADD PRIMARY KEY (`id_accpersonales`);

--
-- Indices de la tabla `consulta_art`
--
ALTER TABLE `consulta_art`
  ADD PRIMARY KEY (`id_art`);

--
-- Indices de la tabla `consulta_automoto`
--
ALTER TABLE `consulta_automoto`
  ADD PRIMARY KEY (`id_automoto`);

--
-- Indices de la tabla `consulta_comercio`
--
ALTER TABLE `consulta_comercio`
  ADD PRIMARY KEY (`id_comercio`);

--
-- Indices de la tabla `consulta_consorcio`
--
ALTER TABLE `consulta_consorcio`
  ADD PRIMARY KEY (`id_consorcio`);

--
-- Indices de la tabla `consulta_hogar`
--
ALTER TABLE `consulta_hogar`
  ADD PRIMARY KEY (`id_hogar`);

--
-- Indices de la tabla `contacto_pagina`
--
ALTER TABLE `contacto_pagina`
  ADD PRIMARY KEY (`id_contacto`);

--
-- Indices de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD PRIMARY KEY (`id_cot`);

--
-- Indices de la tabla `seguros`
--
ALTER TABLE `seguros`
  ADD PRIMARY KEY (`id_s`);

--
-- Indices de la tabla `siniestros`
--
ALTER TABLE `siniestros`
  ADD PRIMARY KEY (`id_sin`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_u`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consulta_accpersonales`
--
ALTER TABLE `consulta_accpersonales`
  MODIFY `id_accpersonales` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `consulta_art`
--
ALTER TABLE `consulta_art`
  MODIFY `id_art` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `consulta_automoto`
--
ALTER TABLE `consulta_automoto`
  MODIFY `id_automoto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `consulta_comercio`
--
ALTER TABLE `consulta_comercio`
  MODIFY `id_comercio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `consulta_consorcio`
--
ALTER TABLE `consulta_consorcio`
  MODIFY `id_consorcio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `consulta_hogar`
--
ALTER TABLE `consulta_hogar`
  MODIFY `id_hogar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `contacto_pagina`
--
ALTER TABLE `contacto_pagina`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  MODIFY `id_cot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `seguros`
--
ALTER TABLE `seguros`
  MODIFY `id_s` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `siniestros`
--
ALTER TABLE `siniestros`
  MODIFY `id_sin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
