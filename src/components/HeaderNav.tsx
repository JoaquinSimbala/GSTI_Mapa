import React, { useState } from 'react';
import {
  Search,
  Compass,
  Layers,
  RotateCcw,
  Target,
  Cpu,
  Award
} from 'lucide-react';
import { CONCEPT_DETAILS } from '../data/mapData';

interface HeaderNavProps {
  activeFilter: string;
  onFilterChange: (branch: string) => void;
  onSearchSelect: (nodeId: string) => void;
  onStartTour: () => void;
  onResetView: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeFilter,
  onFilterChange,
  onSearchSelect,
  onStartTour,
  onResetView
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'Todo el Mapa', icon: Layers, color: '#4f46e5' },
    { id: 'valor', label: '1. Arquetipos de Valor', icon: Target, color: '#059669' },
    { id: 'svs', label: '2. Componentes SVS', icon: Cpu, color: '#2563eb' },
    { id: 'principios', label: '3. 7 Principios ITIL', icon: Compass, color: '#d97706' },
    { id: 'practica', label: '4. Casos Prácticos UTP', icon: Award, color: '#7c3aed' }
  ];

  const searchResults = Object.values(CONCEPT_DETAILS).filter((item) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(term)) ||
      item.shortDesc.toLowerCase().includes(term) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(term)))
    );
  });

  return (
    <header className="main-header">
      <div className="header-card">
        {/* Brand & Titles */}
        <div className="header-brand">
          <div className="header-titles">
            <h1 className="header-title">
              SISTEMA DE VALOR DEL SERVICIO (SVS) - ITIL 4
            </h1>
            <p className="header-subtitle">
              Gestión del Servicio de TI · Semana 11, Sesión 1 (UTP) · Demanda a Valor, Gobernanza y 7 Principios
            </p>
          </div>
        </div>

        {/* Filter Branches Pills (Scrollable horizontally on mobile) */}
        <div className="header-filters">
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.id;
            const IconComp = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => onFilterChange(opt.id)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
                style={{
                  background: isActive ? opt.color : 'transparent',
                  color: isActive ? '#ffffff' : '#475569'
                }}
              >
                <IconComp size={13} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Action Buttons */}
        <div className="header-actions">
          {/* Live Search Input */}
          <div className="search-container">
            <div className="search-box">
              <Search size={14} color="#64748b" className="search-icon" />
              <input
                type="text"
                placeholder="Buscar tema, principio, base de datos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="search-input"
              />
            </div>

            {/* Dropdown Results */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onMouseDown={() => {
                      onSearchSelect(item.id);
                      setSearchTerm('');
                    }}
                    className="hover-search-item search-dropdown-item"
                  >
                    <div className="search-item-title">{item.title}</div>
                    <div className="search-item-branch">{item.branchLabel}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guided Tour Trigger Button */}
          <button
            onClick={onStartTour}
            className="action-btn tour-action-btn"
            title="Iniciar recorrido guiado"
          >
            <Compass size={14} />
            <span>Tour Guiado</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={onResetView}
            className="action-btn reset-action-btn"
            title="Restablecer vista global"
          >
            <RotateCcw size={14} />
            <span>Centrar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
